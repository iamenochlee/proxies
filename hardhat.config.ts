import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: IHardhatUserConfig = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  defaultNetwork: "localhost",
};

export default config;

interface IHardhatUserConfig extends HardhatUserConfig {
  settings: {
    optimizer: {
      enabled: Boolean;
      runs: number;
    };
  };
}
