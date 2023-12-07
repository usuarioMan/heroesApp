import superheroImage from "../../../assets/notFound.jpg";
export const NoResultsView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={superheroImage}
        alt="Superhero Image"
        className="mb-4 w-32 h-32 object-cover rounded-full"
      />
      <h2 className="text-2xl font-bold mb-2">No se encontraron resultados</h2>
      <p className="text-gray-500">Intenta con otro nombre de héroe.</p>
    </div>
  );
};
