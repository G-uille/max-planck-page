import { useState } from "react";
import useCustomFetch from "../hooks/use-customFetch";
import { Inscripcions } from "@/models/Inscriptions.model";

const useInscriptions = () => {
  const [loading, setLoading] = useState(false);

  const { fetchData } = useCustomFetch();

  const create = async (inscriptionData: Inscripcions) => {
    setLoading(true);

    try {
      const { response, error } = await fetchData({
        endpoint: "/public-inscriptions",
        method: "POST",
        query: {
          name: inscriptionData.name,
          lastname: inscriptionData.lastname,
          email: inscriptionData.email,
          dni: inscriptionData.dni,
          ciudad: inscriptionData.ciudad,
          courseId: inscriptionData.courseId,
          dueDate: inscriptionData.dueDate,
          phone: inscriptionData.phone,
          whatsappOptIn: inscriptionData.whatsappOptIn,
        },
      });

      if (error) {
        throw new Error(error.response.data.message);
      }

      return response;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    create,
  };
};

export default useInscriptions;
