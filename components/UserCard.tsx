import { User } from '../types/user';

type UserCardProps = {
    user: User;
    onClick: () => void;
};

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
    return (
        <div className='prompt_card min-w-[20rem]' onClick={onClick}>
            <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start cursor-pointer items-center gap-3'>
                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900 border-b-2'>
                            <span> {user.name} </span>
                        </h3>
                        <p className='font-inter text-sm text-gray-500 mt-4'>
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserCard;