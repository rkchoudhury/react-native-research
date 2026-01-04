import { useEffect, useState } from "react"
import { useInjection } from "@src/di/core";
import { PET_TYPES } from "@src/types/types";
import { IGetPetUseCase } from "../../domain/usecase/IGetPetUseCase";
import { Pet } from "../../domain/models/Pet";

export const PetViewModel = () => {
    const petUseCase = useInjection<IGetPetUseCase>(PET_TYPES.IGetPetUseCase);
    console.log("Pet Use Case Instance:", petUseCase);

    const [pets, setPets] = useState<Pet[]>([]);

    // useEffect(() => {
    //     const getPetData = async () => {
    //         try {
    //             const res = await petUseCase.getPetByStatus();
    //             console.log("Pet Data:", res);
    //         } catch (error) {
    //             console.error("Error fetching pet data:", error);
    //         }

    //     }

    //     getPetData();
    // }, []);

    const getPetData = async () => {
        try {
            const res = await petUseCase.getPetByStatus();
            setPets(res);
            console.log("Pet Data:", res);
        } catch (error) {
            console.error("Error fetching pet data:", error);
        }

    }

    return {
        getPetData,
        pets,
    }

}