/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
    Allocated,
    Appealed,
    BatchPayoutSuccessful,
    Claimed,
    Distributed,
    DistributionUpdated,
    FundsDistributed,
    PoolActive,
    RecipientStatusUpdated,
    Registered,
    TimestampsUpdated
} from "../../generated/DonationVotingMerkleDistributionStrategy/DonationVotingMerkleDistributionStrategy";
import { Pool, Recipient } from "../../generated/schema";

// NOTE: The following types will come from generated code when we have the abi
// for the strategy and the strategy is deployed.
export function handleAppealed(event: Appealed): void {
    const recipientId: Address = event.params.recipientId;
    const data = event.params.data;
    const sender: Address = event.params.sender;
}

export function handleRecipientStatusUpdated(event: RecipientStatusUpdated): void {
    const rowIndex = event.params.rowIndex;
    const fullrow = event.params.fullRow;
    const sender = event.params.sender;
}

export function handleClaimed(event: Claimed): void {
    const recipientId: Address = event.params.recipientId;
    const recipientAddress: Address = event.params.recipientAddress;
    const amount: BigInt = event.params.amount;
    const token: Address = event.params.token;
}

export function handleTimestampsUpdated(event: TimestampsUpdated): void {
    const regStartTime: BigInt = event.params.registrationStartTime;
    const regEndTime: BigInt = event.params.registrationEndTime;
    const allocationStartTime: BigInt = event.params.allocationStartTime;
    const allocationEndTime: BigInt = event.params.allocationEndTime;
    const sender: Address = event.params.sender;
}

export function handleDistributionUpdated(event: DistributionUpdated): void {
    const merkleRoot = event.params.merkleRoot;
    const metadata = event.params.metadata;
}

export function handleFundsDistributed(event: FundsDistributed): void {
    const amount: BigInt = event.params.amount;
    const grantee: Address = event.params.grantee;
    const token: Address = event.params.token;
    const recipientId: Address = event.params.recipientId;

    const recipientEntity = new Recipient(recipientId.toHex());

    if (recipientEntity) {
        // TODO: Update recipient entity
    }
}

export function handleBatchPayoutSuccessful(event: BatchPayoutSuccessful): void {
    const sender: Address = event.params.sender;
}

export function handleAllocated(event: Allocated): void {
    const recipientId: Address = event.params.recipientId;
    const amount: BigInt = event.params.amount;
    const token: Address = event.params.token;
    const sender = event.params.sender;

    const recipientEntity = new Recipient(recipientId.toHex());
    if (recipientEntity) {
        // TODO: Update recipient entity
    }
}

export function handleDistributed(event: Distributed): void {
    const recipientId: Address = event.params.recipientId;
    const recipientEntity = new Recipient(recipientId.toHex());
    if (recipientEntity) {
        // TODO: Update recipient entity
    }
}

export function handlePoolActive(event: PoolActive): void {
    const poolId: Address = event.address;
    const poolEntity = new Pool(poolId.toHex());
    if (poolEntity) {
        poolEntity.isPoolActive = true;
        poolEntity.save();
    }
}

export function handleRegistered(event: Registered): void {
    const recipientId: Address = event.params.recipientId;
    const data = event.params.data;
    const sender = event.params.sender;

    const recipientEntity = new Recipient(recipientId.toHex());
    if (recipientEntity) {
        // TODO: Update recipient entity
    }
}