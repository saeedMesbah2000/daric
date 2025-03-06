import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router";
import {useUserInfo} from "../../contexts/userInfoContext";
import {LoginUser} from "../../services/IdentityServices";
import {Button, InputField} from "../../share-component";
/**
 *
 * @returns
 */
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {setUserInfo} = useUserInfo();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);

    LoginUser(data.phoneNumber).then((response) => {
      setUserInfo(response);
      setIsLoading(false);
      navigate("/verification");
    });
  };

  return (
    <div className="w-[300px] sm:w-[370px] px-6 py-8 bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[350px] flex flex-col gap-6 justify-between">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          <span className="bg-gradient-to-br from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            ورود به دریک
          </span>
        </h2>

        <InputField
          id="phoneNumber"
          register={register}
          errors={errors}
          label="شماره تماس"
          type="number"
          validation={{
            required: "شماره تماس الزامی است!",
            minLength: {value: 11, message: "شماره باید ۱۱ رقم باشد!"},
            maxLength: {value: 11, message: "شماره باید ۱۱ رقم باشد!"},
          }}
        />

        <Button
          type="submit"
          text="تایید و ارسال کد"
          loading={isLoading}
          className="w-full"
        />
      </form>

      <div className="flex justify-center items-center mt-6 gap-2">
        <p className="text-gray-600">اکانت نداری؟</p>
        <Link to="/register" className="text-purple-500 hover:underline">
          الان بساز
        </Link>
      </div>
    </div>
  );
};

export default Login;
