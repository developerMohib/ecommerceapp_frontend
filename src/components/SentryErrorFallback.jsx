import { Link } from "react-router";
const SentryErrorFallback = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 to-slate-300 px-4">
            <div className="w-full max-w-lg rounded-lg bg-white p-10 text-center shadow-xl">
                <h1 className="mb-4 text-3xl font-bold text-red-600">
                    Oops! Something went wrong
                </h1>

                <p className="mb-6 text-gray-600">
                    We're sorry, but something unexpected happened.
                </p>


                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Link className="rounded-md bg-gray-600 px-6 py-2.5 font-medium text-white transition hover:bg-gray-700" to={"/"}>GO BACK</Link>
                </div>
            </div>
        </div>
    );
};

export default SentryErrorFallback;