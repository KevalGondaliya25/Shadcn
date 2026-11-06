import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/slice/auth";

const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        const router = useRouter();
        const user = useSelector(selectCurrentUser);

        if (typeof window !== "undefined") {
            if (!user) {
                router.replace("/");
                return null;
            }

            return <WrappedComponent {...props} />;
        }

        return null;
    };
};

export default withAuth;
