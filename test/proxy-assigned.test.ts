import { ethers } from "hardhat";
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { assert } = require("chai");

async function lookUpStorage(address: string, slot: string) {
  const value = await ethers.provider.getStorageAt(address, slot);
  return value;
}

describe("ProxyAssigned", function() {
  async function deployProxy() {
    const ProxyAssigned = await ethers.getContractFactory("ProxyAssigned");
    const proxyAssigned = await ProxyAssigned.deploy();
    const Logic1Assigned = await ethers.getContractFactory("Logic1Assigned");
    const logic1Assigned = await Logic1Assigned.deploy();
    const Logic2Assigned = await ethers.getContractFactory("Logic2Assigned");
    const logic2Assigned = await Logic2Assigned.deploy();
    const proxyAsLogic1 = await ethers.getContractAt(
      "Logic1Assigned",
      proxyAssigned.address
    );
    const proxyAsLogic2 = await ethers.getContractAt(
      "Logic2Assigned",
      proxyAssigned.address
    );

    return {
      proxy: proxyAssigned,
      logic1: logic1Assigned,
      logic2: logic2Assigned,
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
    await proxyAsLogic2.changeX(30);
    await proxyAsLogic2.tripleX();

    assert.equal(await lookUpStorage(logic1.address, "0x0"), 0);
    assert.equal(await lookUpStorage(logic2.address, "0x0"), 0);
    assert.equal(await lookUpStorage(proxy.address, "0x0"), 90);
  });
});
