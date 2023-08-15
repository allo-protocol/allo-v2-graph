/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Allocated,
    MilestoneStatusChanged,
    MilestoneSubmitted,
    MilestonesSet,
    PoolActive,
    RecipientStatusChanged,
    Registered
} from "../../generated/DirectGrantsSimpleStrategy/DirectGrantsSimpleStrategy";

export function handleRecipientStatusChanged(event: RecipientStatusChanged): void {}

export function handleMilestoneSubmitted(event: MilestoneSubmitted): void {}

export function handleMilestoneStatusChanged(event: MilestoneStatusChanged): void {}

export function handleMilestonesSet(event: MilestonesSet): void {}

export function handleAllocated(event: Allocated): void {}

export function handleRegistered(event: Registered): void {}

export function handlePoolActive(event: PoolActive): void {}