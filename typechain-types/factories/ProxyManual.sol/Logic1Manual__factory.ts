/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Logic1Manual,
  Logic1ManualInterface,
} from "../../ProxyManual.sol/Logic1Manual";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    name: "changeX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060e38061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80639435337e14602d575b600080fd5b60436004803603810190603f91906085565b6045565b005b8060008190555050565b600080fd5b6000819050919050565b6065816054565b8114606f57600080fd5b50565b600081359050607f81605e565b92915050565b6000602082840312156098576097604f565b5b600060a4848285016072565b9150509291505056fea2646970667358221220ef0d40bf8e62b8d45f10477d2064f115d595e472ea76339653cec3156f2a880164736f6c63430008110033";

type Logic1ManualConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Logic1ManualConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Logic1Manual__factory extends ContractFactory {
  constructor(...args: Logic1ManualConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Logic1Manual> {
    return super.deploy(overrides || {}) as Promise<Logic1Manual>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Logic1Manual {
    return super.attach(address) as Logic1Manual;
  }
  override connect(signer: Signer): Logic1Manual__factory {
    return super.connect(signer) as Logic1Manual__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Logic1ManualInterface {
    return new utils.Interface(_abi) as Logic1ManualInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Logic1Manual {
    return new Contract(address, _abi, signerOrProvider) as Logic1Manual;
  }
}
