type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
  ref: React.RefObject<HTMLVideoElement>;
};

export const MyVideoPlayer = (
  props: MyVideoPlayerProps,
  ref: MyVideoPlayerProps
) => {
  return (
    <video width={props.width} ref={props.ref}>
      <source src={props.src} type={props.type} />
    </video>
  );
};
