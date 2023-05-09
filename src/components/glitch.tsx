import Image from "next/image";
import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`w-[fit-content] flex space-x-0`};
`;

export const Static = () => (
  <Container tw="bg-black absolute top-0 w-full max-w-[96rem] flex flex-row justify-center z-[1] h-[18.75rem] lg:(h-[25rem]) xl:(h-[32.8125rem]) 2xl:(h-[40rem])">
    <div tw="w-[fit-content] flex space-x-0">
      <div tw="h-full w-[25%]">
        <Image src="/images/still/anatomy.png" width={461} height={640} priority alt="Red background with black illustration of the human anatomy" style={{ objectFit: `cover`, objectPosition: `center`, height: `100%` }} />
      </div>
      <div tw="h-full w-[25%]">
        <Image src="/images/still/angel.png" width={441} height={640} priority alt="Red background with glitchy black illustration of an angel holding a sword" style={{ objectFit: `cover`, objectPosition: `center`, height: `100%` }} />
      </div>

      <div tw="h-full w-[25%]">
        <Image src="/images/still/caeser.png" width={425} height={640} priority alt="Red background with glitchy black image of a heavily contrasted Julius Caeser" style={{ objectFit: `cover`, objectPosition: `center`, height: `100%` }} />
      </div>

      <div tw="h-full w-[25%]">
        <Image src="/images/still/gun.png" width={413} height={640} priority alt="Red background with glitchy black image of a heavily contrasted hand pointing a gun" style={{ objectFit: `cover`, objectPosition: `left`, height: `100%` }} />
      </div>
    </div>
  </Container>
);

const Glitch = () => (
    <Container tw="bg-black absolute top-0 w-full flex flex-row justify-center z-[2] h-[18.75rem] lg:(h-[25rem]) xl:(h-[32.8125rem]) 2xl:(h-[40rem])">
      <div tw="w-[fit-content] flex space-x-0">
        <div tw="h-full w-[25%]">
          <Image src="/images/gifs/anatomy.gif" width={461} height={640} alt="Red background with black illustration of the human anatomy" style={{ objectFit: `cover`, objectPosition: `center`, height: `100%` }} />
        </div>
        <div tw="h-full w-[25%]">
          <Image src="/images/gifs/angel.gif" width={441} height={640} alt="Red background with glitchy black illustration of an angel holding a sword" style={{ objectFit: `cover`, objectPosition: `center`, height: `100%` }} />
        </div>

        <div tw="h-full w-[25%]">
          <Image src="/images/gifs/caeser.gif" width={425} height={640} alt="Red background with glitchy black image of a heavily contrasted Julius Caeser" style={{ objectFit: `cover`, objectPosition: `center`, height: `100%` }} />
        </div>

        <div tw="h-full w-[25%]">
          <Image src="/images/gifs/gun.gif" width={413} height={640} alt="Red background with glitchy black image of a heavily contrasted hand pointing a gun" style={{ objectFit: `cover`, objectPosition: `left`, height: `100%` }} />
        </div>
    </div>
  </Container>
);

export default Glitch;
