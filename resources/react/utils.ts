import axiosConfig from "./axiosConfig";

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error);
};

export const getUsers = async () => {
    try {
        const response = await axiosConfig.get(`/users`);
        const { success, users, message } = response.data;

        if (success) {
            return users;
        } else {
            console.log(message);
            return [];
        }
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const getSearchUsers = async (userName: string) => {
    if (!userName) {
        return;
    }

    try {
        const response = await axiosConfig.get(`/users/search?q=${userName}`);
        const { success, users, message } = response.data;

        if (success) {
            return users;
        } else {
            console.log(message);
            return [];
        }
    } catch (err) {
        console.error(getErrorMessage(err));
        return [];
    }
};

export const updateUsers = async (users) => {
    try {
        await axiosConfig.put("/users/update", {
            users,
        });
    } catch (error) {
        console.error(error);
    }
};
