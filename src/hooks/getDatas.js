import axios, { all } from "axios";
import { ref } from "vue";

export function datas() {
  const isFavorite = ref(false);
  const isAdded = ref(false);
  const colesoMas = ref([]);
  const motoColesoMas = ref([]);
  const disciMas = ref([]);
  const allData = ref([])

  const dataColeso = async () => {
    try {
      const res = await axios.get("https://4df6f1483acd3ddc.mokky.dev/coleso");

      colesoMas.value = res.data.map((obj) => ({
        ...obj,
        isFavorite: false,
        isAdded: false,
      }));


    } catch (err) {
      console.log("error in data coleso" + err);
    }
  };

  const dataMotoColeso = async () => {
    try{

      const res = await axios.get('https://4df6f1483acd3ddc.mokky.dev/moto_coleso')

      motoColesoMas.value = res.data.map(obj =>({
        ...obj,
        isFavorite:false,
        isAdded:false
      }))

    }catch(err){
      console.log('error in data motoColeso' + err);
      
    }
  }

  const dataDisci = async () => {
    try{

      const res = await axios.get('https://4df6f1483acd3ddc.mokky.dev/disci')

      disciMas.value = res.data.map(obj=>({
        ...obj,
        isFavorite:false,
        isAdded:false
      }))

    }catch(err){
      console.log('error in data disci' + err);
      
    }
  }

  const loadData = async () => {
    try{
          const [colesoRes,motoRes,disciRes] = await Promise.all([
            axios.get("https://4df6f1483acd3ddc.mokky.dev/coleso"),
            axios.get("https://4df6f1483acd3ddc.mokky.dev/moto_coleso"),
            axios.get("https://4df6f1483acd3ddc.mokky.dev/disci")
          ])

          allData.value = [
            ...colesoRes.data,
            ...motoRes.data,
            ...disciRes.data
          ]

          console.log(allData.value);
    }catch(err){
      console.log('error in alldata' + err);
    }
  }



  return{
    isFavorite,
    isAdded,
    colesoMas,
    dataColeso,
    dataMotoColeso,
    motoColesoMas,
    dataDisci,
    disciMas,
    allData,
    loadData
  }
}
