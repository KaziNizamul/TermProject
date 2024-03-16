import { CognitoUserPool } from "amazon-cognito-identity-js";

const PoolData = {
  UserPoolId: "us-east-1_2QjeCsp9Y",
  ClientId: "qduvv83i1rti6vfnsd73bqek5",
};

export default new CognitoUserPool(PoolData);
