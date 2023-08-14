import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import {
  afterAll,
  assert,
  beforeAll,
  clearStore,
  describe,
  test,
} from "matchstick-as/assembly/index";
import { handleProfileCreated } from "../../src/registry";
import { createProfileCreatedEvent } from "./registry-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    const profileId = Bytes.fromI32(1234567890);
    const nonce = BigInt.fromI32(234);
    const name = "Example string value";
    // FIXME: pass a Tuple type for metadata
    const tupleArray: Array<ethereum.Value> = [
      ethereum.Value.fromI32(1),
      ethereum.Value.fromString("pointer"),
    ];
    const tuple = tupleArray as ethereum.Tuple;

    const metadata: ethereum.Tuple = tuple;
    const owner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    const anchor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    const newProfileCreatedEvent = createProfileCreatedEvent(
      profileId,
      nonce,
      name,
      metadata,
      owner,
      anchor
    );
    handleProfileCreated(newProfileCreatedEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Profile created and stored", () => {
    assert.entityCount("Profile", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Profile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "profileId",
      "1234567890"
    );
    assert.fieldEquals(
      "Profile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "nonce",
      "234"
    );
    assert.fieldEquals(
      "Profile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "name",
      "Example string value"
    );
    assert.fieldEquals(
      "Profile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "metadata",
      "ethereum.Tuple Not implemented"
    );
    assert.fieldEquals(
      "Profile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "owner",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "Profile",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "anchor",
      "0x0000000000000000000000000000000000000001"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
