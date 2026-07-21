import { useAuth } from "@clerk/react";
import { useEffect } from "react";
import * as Sentry from "@sentry/react";

const SentryUserSynce =({ children }) => {
    const { isLoaded, userId } = useAuth()
    useEffect(() => {
        if (!isLoaded) return
        Sentry.setUser(userId ? { id: userId } : null)
    }, [isLoaded, userId])
    return children
};

export default SentryUserSynce;