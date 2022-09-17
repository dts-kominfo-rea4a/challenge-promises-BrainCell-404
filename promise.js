const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null
const promiseOutput = async (emosi) => {
  // menggabungkan semua data dari bioskop
  const ixx = await promiseTheaterIXX();
  const vcg = await promiseTheaterVGC();
  const gabungData = [...ixx, ...vcg];

  // variabel utuk hasil akhir
  let hitungEmosi = 0;

  // looping untuk memfilter berdasarkan emosi yang dicari
  gabungData.forEach((perOrang) => {
    if (perOrang.hasil === emosi) {
      hitungEmosi++;
    }
  });

  // mengembalikan nilai dari hasil akhir yang sudah di filtering
  return hitungEmosi;
};

module.exports = {
  promiseOutput,
};
