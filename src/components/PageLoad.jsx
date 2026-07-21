import { LoaderIcon } from 'lucide-react';
const PageLoad = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <LoaderIcon className='size-10 animate-spin text-primary' />
        </div>
    );
};

export default PageLoad;