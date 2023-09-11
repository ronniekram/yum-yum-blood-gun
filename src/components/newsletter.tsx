/* eslint-disable no-secrets/no-secrets */
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  ${tw`flex space-x-0 items-center`};
  ${tw`border border-red-300`};
  ${tw`w-full h-[fit-content]`};
`;

const Submit = styled.input`
  ${tw`font-display font-bold text-xl leading-[20px]`};
  ${tw`text-white bg-red-300`};
  ${tw`px-5 py-[7px] md:(py-2 px-6) lg:(px-8)`};
  ${tw`cursor-pointer transition duration-300 ease-in-out`};
  ${tw`hover:(bg-red-200)`};
`;

const Input = styled.input`
  ${tw`bg-white text-black font-sans`};
  ${tw`leading-[19px] px-4`};
  ${tw`w-full h-[2.125rem] flex items-center`};
  ${tw`md:(h-[2.25rem])`};
  ${tw`placeholder:(text-black/75)`};
  ${tw`focus:(outline-2 outline-red-200 ring-0)`};
`;

const Newsletter = () => (
    <div id="mc_embed_signup">
      <h2 tw="text-white text-lg leading-[19px] font-sans font-bold mb-2.5">Sign up for early access to the beta</h2>
      <form action="https://cool.us21.list-manage.com/subscribe/post?u=69bab77e63d33f032409a7ebb&amp;id=a6eeade60f&amp;f_id=00a6b6e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
        <div id="mc_embed_signup_scroll">

          <Wrapper className="mc-field-group" id="beta-ea">
            {/* EMAIL FIELD  */}
            <label htmlFor="mce-EMAIL" tw="hidden" aria-label="Email Address">
              Email Address
              <span className="asterisk">*</span>
            </label>
            <Input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" required placeholder="press@goblindelight.com" />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            {/* SUBMIT BUTTON  */}
            <Submit type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="button" />
            {/* <div className="optionalParent">
              <div className="clear foot">
                  <Submit type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div> */}
          </Wrapper>

          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: `none` }}></div>
            <div className="response" id="mce-success-response" style={{ display: `none` }}></div>
          </div>

          <div  style={{ position: `absolute`, left: `-5000px` }} aria-hidden="true">
            <input type="text" name="b_69bab77e63d33f032409a7ebb_a6eeade60f" tabIndex={-1} value="" />
          </div>

        </div>
      </form>
    </div>
);

export default Newsletter;
