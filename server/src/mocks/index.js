import User from '../models/User';

export default async () => {
    try {
        await User.remove();

    } catch(error){
        throw error;
    }
};