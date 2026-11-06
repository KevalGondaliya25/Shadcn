import axios from "axios";
import { BASE_URL } from "@/utils/const";

const axiosBaseQuery =
    () =>
    async ({
        url,
        method,
        body,
        headers,
    }: {
        url: string;
        method: string;
        body?: any;
        headers?: Record<string, string>;
    }) => {
        try {
            const response = await axios({
                url: BASE_URL + url,
                method,
                data: body,
                headers: {
                    ...headers,
                    "Content-Type": "application/json",
                },
            });
            return Promise.resolve(response);
        } catch (axiosError) {
            if (axios.isAxiosError(axiosError)) {
                if (axiosError.response) {
                    return Promise.reject({
                        status: axiosError.response.data.status,
                        success: axiosError.response.data.success,
                        data: null,
                        message: axiosError.response.data.message,
                    });
                } else {
                    return Promise.reject({
                        message: axiosError.message,
                    });
                }
            }
            return Promise.reject(axiosError);
        }
    };

export default axiosBaseQuery;
