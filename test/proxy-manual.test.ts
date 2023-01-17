import { ethers } from "hardhat";
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

async function lookUpStorage(address: string, slot: string) {
  const value = await ethers.provider.getStorageAt(address, slot);
  return value;
}

describe("ProxyManual", function() {
  async function deployProxy() {
    const ProxyManual = await ethers.getContractFactory("ProxyManual");
    const proxyManual = await ProxyManual.deploy();
    const Logic1Manual = await ethers.getContractFactory("Logic1Manual");
    const logic1Manual = await Logic1Manual.deploy();
    const Logic2Manual = await ethers.getContractFactory("Logic2Manual");
    const logic2Manual = await Logic2Manual.deploy();
    const proxyAsLogic1 = await ethers.getContractAt(
      "Logic1Manual",
      proxyManual.address
    );
    const proxyAsLogic2 = await ethers.getContractAt(
      "Logic2Manual",
      proxyManual.address
    );

    return {
      proxy: proxyManual,
      logic1: logic1Manual,
      logic2: logic2Manual,
      proxyAsLogic1,
      proxyAsLogic2,
    };
  }

  it("should work for logic1", async function() {
    const { proxy, logic1, proxyAsLogic1 } = await loadFixture(deployProxy);
    await proxy.changeImplementaion(logic1.address);
    await proxyAsLogic1.changeX(20);

    assert.equal(await lookUpStorage(logic1.address, "0x0"), 0);
    assert.equal(await lookUpStorage(proxy.address, "0x0"), 20);
  });

  it("should work with upgrades", async function() {
    const {
      proxy,
      logic1,
      logic2,
      proxyAsLogic1,
      proxyAsLogic2,
    } = await loadFixture(deployProxy);
    await proxy.changeImplementaion(logic1.address);
    await proxyAsLogic1.changeX(20);

    await proxy.changeImplementaion(logic2.address);
    const tx = await proxyAsLogic2.changeX(30);
    tx.wait(2);
    await proxyAsLogic2.tripleX();

    assert.equal(await lookUpStorage(logic1.address, "0x0"), 0);
    assert.equal(await lookUpStorage(logic2.address, "0x0"), 0);
    //if x is not defined manually thid bellow test fails
    assert.equal(await lookUpStorage(proxy.address, "0x0"), 90);
  });
});
