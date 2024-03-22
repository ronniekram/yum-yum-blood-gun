/* eslint-disable no-secrets/no-secrets */
import Image from "next/image";
import tw, { styled } from "twin.macro";


const Wrapper = styled.section`
  ${tw`w-full bg-red-200`};
  ${tw`px-[5.3%] sm:(px-[5.2%]) 2xl:(px-0)`};
  ${tw`py-8 sm:(py-10) xl:(py-16)`};
`;

const Inner = styled.div`
  ${tw`w-full mx-auto`};
  ${tw`max-w-[86rem]`};
  ${tw`flex flex-col space-y-4 md:(flex-row items-center space-y-0 space-x-4)`};
  ${tw`xl:(space-x-8) 2xl:(justify-between)`};
`;

const Input = styled.input`
  ${tw`bg-white text-black w-full`};
  ${tw`rounded-none`};
  ${tw`px-2.5 flex items-center`};
  ${tw`font-sans text-sm xl:(text-lg)`};
  ${tw`placeholder:(text-black/75)`};
  ${tw`focus:(ring-0 outline-2 outline-blue-100)`};
`;

const Submit = styled.input`
  ${tw`bg-red-200 text-white`};
  ${tw`rounded-none`};
  ${tw`w-fit px-8 py-1`};
  ${tw`font-display font-bold text-lg xl:(text-xl)`};
  ${tw`border-l-[1.25px] border-black`};
`;

const Form = styled.form`
  ${tw`w-full flex border-[1.25px] border-black`};
  ${tw`md:(max-w-[17.375rem]) lg:(max-w-[18.75rem])`};
  ${tw`xl:(max-w-[25rem]) 2xl:(max-w-[30rem])`};
`;

const Waitlist = () => {
  return (
    <Wrapper>
      <Inner>
        <div
        // tw="w-full md:(w-[57%]) xl:(w-[60%])"
        >
          <Image
            src="/images/waitlist.png"
            alt="Early Access Beta Waitlist"
            width={838}
            height={47}
            style={{ objectFit: `contain`, objectPosition: `center` }}
          />
        </div>
        <Form
          action="https://gmail.us11.list-manage.com/subscribe/post?u=ecfcff8f831436f349d757775&amp;id=22ab8965ca&amp;f_id=00ffa7e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <p tw="sr-only">Sign up for the early access beta waitlist!</p>
          <Input
            type="email"
            // defaultValue=""
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            required
            placeholder="press@goblindelight.com"
          />
          <Submit
            type="submit"
            value="Sign Up"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </Form>
      </Inner>
    </Wrapper>
  );
};

export default Waitlist;
