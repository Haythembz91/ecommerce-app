import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const loginLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1 m"),
    analytics: true,
});

export const checkoutLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "5 m"),
    analytics: true,
});
