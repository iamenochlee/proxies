/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Logic1Assigned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Logic1Assigned__factory>;
    getContractFactory(
      name: "Logic2Assigned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Logic2Assigned__factory>;
    getContractFactory(
      name: "ProxyAssigned",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAssigned__factory>;
    getContractFactory(
      name: "Logic1Manual",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Logic1Manual__factory>;
    getContractFactory(
      name: "Logic2Manual",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Logic2Manual__factory>;
    getContractFactory(
      name: "ProxyManual",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyManual__factory>;

    getContractAt(
      name: "Logic1Assigned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Logic1Assigned>;
    getContractAt(
      name: "Logic2Assigned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Logic2Assigned>;
    getContractAt(
      name: "ProxyAssigned",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyAssigned>;
    getContractAt(
      name: "Logic1Manual",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Logic1Manual>;
    getContractAt(
      name: "Logic2Manual",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Logic2Manual>;
    getContractAt(
      name: "ProxyManual",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyManual>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
