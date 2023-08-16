/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Address, BigInt, Bytes, ethereum, log } from "@graphprotocol/graph-ts";
import {
    Allocated,
    MilestoneStatusChanged,
    MilestoneSubmitted,
    MilestonesSet,
    PoolActive,
    RecipientStatusChanged,
    Registered
} from "../../generated/DirectGrantsSimpleStrategy/DirectGrantsSimpleStrategy";
import { Metadata, Pool, Recipient } from "../../generated/schema";

export function handleRecipientStatusChanged(event: RecipientStatusChanged): void {
    const recipientId: Address = event.params.recipientId;
    const status: i32 = event.params.status;

    // const recipientEntity = Recipient.load(recipientId.toHexString());
}

export function handleMilestoneSubmitted(event: MilestoneSubmitted): void {
    const recipientId: Address = event.params.recipientId;
    const milestoneId: BigInt = event.params.milestoneId;

    // TODO:
}

export function handleMilestoneStatusChanged(event: MilestoneStatusChanged): void {
    const recipientId: Address = event.params.recipientId;
    const milestoneId: BigInt = event.params.milestoneId;
    const status: i32 = event.params.status;
}

export function handleMilestonesSet(event: MilestonesSet): void {
    const recipientId: Address = event.params.recipientId;

    // TODO:
}

export function handleAllocated(event: Allocated): void {
    const recipientId: Address = event.params.recipientId;
    const amount: BigInt = event.params.amount;
    const token: Address = event.params.token;
    const sender: Address = event.params.sender;

    const recipientEntity = Recipient.load(recipientId.toHexString());
    if (recipientEntity) {
        recipientEntity.grantAmount = amount;
        recipientEntity.updatedAt = event.block.timestamp;
        recipientEntity.save();
    }
}

export function handleRegistered(event: Registered): void {
    const recipientId: Address = event.params.recipientId;
    // the data to decode
    const data: Bytes = event.params.data;
    // NOTE: Note sure what we can do with the sender here...
    const sender: Address = event.params.sender;

    // NOTE: This is the type string for the data that we need to decode
    const typeString = "(address,address,uint256,(uint256,string))";
    const decodedData = ethereum.decode(typeString, data);

    let recipientAddress: Address;
    let registryAnchor: Address;
    let grantAmount: BigInt;
    let metadata: Metadata;
    if (decodedData) {
        const decodedTuple = decodedData.toTuple();
        log.warning("decodedTuple first field (should be recipientAddress): {}", [decodedTuple[0].toString()]);
        recipientAddress = decodedTuple[0].toAddress();
        registryAnchor = decodedTuple[1].toAddress();
        grantAmount = decodedTuple[2].toBigInt();

        // FIXME: need to set matadata above
        // metadata.protocol = decodedTuple[3].toTuple()[0].toI32();
        // metadata.pointer = decodedTuple[3].toTuple()[1].toString();
    }

    const recipientEntity = Recipient.load(recipientId.toHexString());

    // NOTE: finish this...
    if (recipientEntity) {
        recipientEntity.grantAmount = BigInt.fromI32(0);
        recipientEntity.recipientStatus = 2; // Accepted?
        recipientEntity.useRegistryAnchor = false; // Where to get this?
        // recipientEntity.metadata = metadata.protocol + ":" + metadata.pointer;
        recipientEntity.updatedAt = event.block.timestamp;
        recipientEntity.save();
    }
}

export function handlePoolActive(event: PoolActive): void {
    const isPoolActive: boolean = event.params.active;

    // NOTE: How to get the right poolId here?
    const poolEntity = Pool.load("1");
    if (poolEntity) {
        poolEntity.isPoolActive = isPoolActive;
        poolEntity.save();
    }
}