import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useFormContext, Controller } from "react-hook-form";
interface CaptchaInputProps {
    //   fetchCaptcha: () => Promise<{ imageUrl: string; captchaId: string }>; // Fetch new captcha from server
    fetchCaptcha: () => Promise<{ data: { dntCaptchaImgUrl: string, dntCaptchaId: string, dntCaptchaTokenValue: string, imageUrl:string, tokenText:string } }>;
    onChange: (value: string, captchaId: string) => void; 
}

export const CaptchaInput: React.FC<CaptchaInputProps> = ({ fetchCaptcha, onChange }) => {
    const { control,setValue } = useFormContext();
    const [captchaImage, setCaptchaImage] = useState<string>("");
    const [captchaId, setCaptchaId] = useState<string>("");
    // const [inputValue, setInputValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const loadCaptcha = async () => {
        setLoading(true);
        try {
            const response = await fetchCaptcha();
            const {imageUrl, tokenText } = response.data;
            setCaptchaImage(imageUrl);
            setValue("captchaToken",tokenText );
            setValue("appVersion", "0.1");
            setValue("clientDateTime", `${Date.now()}`);
            setCaptchaId(captchaId || ""); // Set captchaId if available
        } catch (error) {
            console.error("Failed to load captcha:", error);
        } finally {
            setLoading(false);
        }
    };
    // Load captcha on component mount
    React.useEffect(() => {
        loadCaptcha();
    }, []);

    return (
        <div className="flex items-center w-full gap-2 captcha">
            <div className="w-8/12 m-0">
                <Controller
                    name="captchaInputText" 
                    control={control}
                    rules={{ required: "کد در تصویر را وارد نمایید" }}
                    render={({ field, fieldState }) => (
                        <>
                            <input
                                {...field}
                                type="text"
                                placeholder="کد در تصویر را وارد نمایید"
                                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${fieldState.error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                                    }`}
                            />
                            {fieldState.error && (
                                <p className="mt-1 text-sm text-red-500">{fieldState.error.message}</p>
                            )}
                        </>
                    )}
                />
            </div>

            {/* Captcha Image */}
            <div className="flex-shrink-0 w-4/12 relative">
                {captchaImage ? (
                    <img
                        src={captchaImage}
                        alt="Captcha"
                        className="w-full object-contain rounded-md"
                    />
                ) : (
                    <div className="h-10 w-full flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md">
                        Loading...
                    </div>
                )}
            </div>
            {/* Refresh Button */}
            <div className="flex-shrink-0 w-1/12 flex items-center justify-center p-0 m-0">
                <button
                    type="button"
                    onClick={loadCaptcha}
                    className="flex items-center justify-center bg-blue text-white px-3 py-2 rounded-md shadow hover:bg-blue-500"
                >
                    <FontAwesomeIcon icon={faSyncAlt} />
                </button>
            </div>
        </div>
    );
};
