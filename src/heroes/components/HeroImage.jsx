export const HeroImage = ({ id }) => {
  return (
    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center transition-slideInRight animate-slideInRight">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
        <img
          src={`../../../assets/${id}.jpg`}
          alt={"hero image"}
          className="h-full w-full object-cover object-center lg:h-auto lg:w-auto rounded-lg"
        />
      </div>
    </div>
  );
};
