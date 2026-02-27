"use server"

import { INCREASE_CLICKS_CAP } from "./constants"
import { redis } from "./redis"

export async function getGlobalClicks() {
  const valueAsString = await redis.get("mathppuccin:clicks")
  return Number(valueAsString)
}

/**
 * Increases the Global Clicks by the given amount and return the updated Global Clicks count.
 */
export async function increaseGlobalClicksBy(amount: number) {
  if (!Number.isInteger(amount) || amount < 1 || amount > INCREASE_CLICKS_CAP) {
    throw new Error("Invalid amount")
  }
  const res = await redis.incrby("mathppuccin:clicks", amount)
  return res
}
