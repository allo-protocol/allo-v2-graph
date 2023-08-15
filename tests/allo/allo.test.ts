import { BigInt } from "@graphprotocol/graph-ts";
import {
  afterAll,
  beforeAll,
  clearStore,
  describe,
  test
} from "matchstick-as/assembly/index";
import { handleBaseFeePaid } from "../../src/allo";
import { createBaseFeePaidEvent } from "./allo-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Allo entity assertions", () => {
  beforeAll(() => {
    const poolId = BigInt.fromI32(234);
    const amount = BigInt.fromI32(234);
    const newBaseFeePaidEvent = createBaseFeePaidEvent(poolId, amount);
    handleBaseFeePaid(newBaseFeePaidEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Entity created and stored", () => {
    // assert.entityCount("Entity", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    // assert.fieldEquals(
    //   "Entity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "poolId",
    //   "234"
    // );
    // assert.fieldEquals(
    //   "Entity",
    //   "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
    //   "amount",
    //   "234"
    // );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });

  test("handleBaseFeeUpdated()", () => {
    // const event = changetype<BaseFeeUpdated>(newMockEvent());
    // handleBaseFeeUpdated(event);


    // assert.fieldEquals("Entity", event.address, "baseFee", "234");
  });

  test("handleFeePercentageUpdated()", () => {
    // TODO: implement
  });

  test("handlePoolCreated()", () => {
    // TODO: implement
  });

  test("handlePoolFunded()", () => {
    // TODO: implement
  });

  test("handlePoolMetadataUpdated()", () => {
    // TODO: implement
  });

  test("handleRegistryUpdated()", () => {
    // TODO: implement
  });

  // NOTE: handle the way we check the admin roles

  test("handleRoleGranted()", () => {
    // TODO: implement
  });

  test("handleRoleRevoked()", () => {
    // TODO: implement
  });

  test("handleRoleAdminChanged()", () => {
    // TODO: implement
  });

  test("handleStrategyApproved()", () => {
    // TODO: implement
  });

  test("handleStrategyRemoved()", () => {
    // TODO: implement
  });

  test("handleTreasuryUpdated()", () => {
    // TODO: implement
  });
});
