// Start bai1

function getResult1(arr) {
  const btn1 = document.querySelector(".btn1");
  btn1.onclick = () => {
    clearMess();
    const mess1 = document.querySelector(".mess1");
    let sum = 0;
    arr.forEach((nb) => {
      if (nb > 0) {
        sum += nb;
      }
    });
    mess1.classList.add("mess--success");
    mess1.innerHTML = `Tổng các số dương là:${sum}`;
  };
}

// End bai1

// Start bai2

function getResult2(arr) {
  const btn2 = document.querySelector(".btn2");
  btn2.onclick = () => {
    clearMess();
    const mess2 = document.querySelector(".mess2");
    let count = 0;
    arr.forEach((nb) => {
      if (nb > 0) {
        count++;
      }
    });
    mess2.classList.add("mess--success");
    mess2.innerHTML = `Đếm số dương trong mảng là:${count}`;
  };
}

// End bai2

// Start bai3

function getResult3(arr) {
  const btn3 = document.querySelector(".btn3");
  btn3.onclick = () => {
    clearMess();
    const mess3 = document.querySelector(".mess3");
    if (arr.length === 0) {
      mess3.innerHTML = `Mảng rỗng!!`;
    } else {
      let min = arr[0];
      arr.forEach((nb) => {
        if (nb < min) {
          min = nb;
        }
      });
      mess3.classList.add("mess--success");
      mess3.innerHTML = `Số nhỏ nhất trong mảng là:${min}`;
    }
  };
}

// End bai3

// Start bai4

function getResult4(arr) {
  const btn4 = document.querySelector(".btn4");
  btn4.onclick = () => {
    clearMess();
    const mess4 = document.querySelector(".mess4");
    if (arr.length === 0) {
      mess4.innerHTML = `Mảng rỗng!!`;
    } else {
      let valid = false;
      let min = "Không có số dương";
      arr.forEach((nb) => {
        if (nb > 0) {
          min = nb;
          valid = true;
          return;
        }
      });
      arr.forEach((nb) => {
        if (nb < min && nb > 0) {
          min = nb;
        }
      });
      if (valid) {
        mess4.classList.add("mess--success");
      } else {
        mess4.classList.remove("mess--success");
      }
      mess4.innerHTML = `Số dương nhỏ nhất trong mảng là:${min}`;
    }
  };
}

// End bai4

// Start bai5

function getResult5(arr) {
  const btn5 = document.querySelector(".btn5");
  btn5.onclick = () => {
    clearMess();
    const mess5 = document.querySelector(".mess5");
    let nbChan = -1;
    arr.forEach((nb) => {
      if (nb % 2 === 0 && nb !== 0) {
        nbChan = nb;
      }
    });
    mess5.classList.add("mess--success");
    if (nbChan === -1) {
      mess5.innerHTML = `Không có sỗ chẵn! <br/>${nbChan}`;
    } else {
      mess5.innerHTML = `Số chẵn cuối cùng trong mảng là:${nbChan}`;
    }
  };
}

// End bai5

// Start bai8

function getResult8(arr) {
  const btn8 = document.querySelector(".btn8");
  btn8.onclick = () => {
    clearMess();
    const mess8 = document.querySelector(".mess8");
    let snt = -1;
    arr.forEach((nb) => {
      if (nb >= 2) {
        let count = 0;
        for (let i = 1; i <= nb; i++) {
          if (nb % i === 0) {
            count++;
          }
        }
        if (count === 2) {
          snt = nb;
          return;
        }
      }
    });
    mess8.classList.add("mess--success");
    if (snt === -1) {
      mess8.innerHTML = `Không có số nguyên tố! <br/> ${snt}`;
    } else {
      mess8.innerHTML = `Số nguyên tố đầu tiên trong mảng là:${snt}`;
    }
  };
}

// End bai8

// Start bai9
function getResult9(arr) {
  const btn9 = document.querySelector(".btn9");
  btn9.onclick = () => {
    clearMess();
    const mess9 = document.querySelector(".mess9");
    if (arr.length === 0) {
      mess9.innerHTML = "Mảng rỗng!";
    } else {
      let count = 0;
      arr.forEach((item) => {
        if (Math.round(item) === item) {
          count++;
        }
      });
      mess9.classList.add("mess--success");
      mess9.innerHTML = `Mảng có ${count} số nguyên.`;
    }
  };
}

// End bai9

// Start bai10

function getResult10(arr) {
  const btn10 = document.querySelector(".btn10");
  btn10.onclick = () => {
    clearMess();
    const mess10 = document.querySelector(".mess10");
    if (arr.length === 0) {
      mess10.innerHTML = "Mảng rỗng!";
    } else {
      let countSD = 0;
      let countSA = 0;
      arr.forEach((item) => {
        if (item > 0) {
          countSD++;
        } else if (item < 0) {
          countSA++;
        }
      });
      mess10.classList.add("mess--success");
      if (countSA === countSD) {
        mess10.innerHTML = `Số lượng số âm bằng số lượng số dương.
                          <br/>
                          Số âm:${countSA} - Số dương:${countSD}`;
      } else if (countSA < countSD) {
        mess10.innerHTML = `Số lượng số dương nhiều hơn số lượng số âm.
        <br/> Số âm:${countSA} - Số dương:${countSD}`;
      } else {
        mess10.innerHTML = `Số lượng số âm nhiều hơn số lượng số dương.
        <br/>  Số âm:${countSA} - Số dương:${countSD}`;
      }
    }
  };
}

// End bai10

// Start getAll

function getAll(arr) {
  getResult1(arr);
  getResult2(arr);
  getResult3(arr);
  getResult4(arr);
  getResult5(arr);
  getResult8(arr);
  getResult9(arr);
  getResult10(arr);
}

// End getAll

// Start clear mess

function clearMess() {
  const mess1 = document.querySelector(".mess1");
  const mess2 = document.querySelector(".mess2");
  const mess3 = document.querySelector(".mess3");
  const mess4 = document.querySelector(".mess4");
  const mess5 = document.querySelector(".mess5");
  const mess6 = document.querySelector(".mess6");
  const mess7 = document.querySelector(".mess7");
  const mess8 = document.querySelector(".mess8");
  const mess9 = document.querySelector(".mess9");
  mess1.innerHTML = ``;
  mess2.innerHTML = ``;
  mess3.innerHTML = ``;
  mess4.innerHTML = ``;
  mess5.innerHTML = ``;
  mess6.innerHTML = ``;
  mess7.innerHTML = ``;
  mess8.innerHTML = ``;
  mess9.innerHTML = ``;
}

// End clear mess

// Check ALL

function getResultAll() {
  const addBtn = document.querySelector(".add-number1");
  let arrNumber = [];
  if (addBtn) {
    addBtn.onclick = () => {
      const number1 = document.querySelector("#number1").value * 1;
      const arrMess = document.querySelector(".arr-mess");

      arrNumber.push(number1);
      arrMess.innerHTML = `Mảng: [${arrNumber}]`;
      clearMess();
      getAll(arrNumber);
    };
  }

  function getResult6() {
    const swapBtn = document.querySelector(".swap-ps");
    swapBtn.onclick = () => {
      clearMess();
      const vitri1 = document.querySelector(".vitri1").value * 1;
      const vitri2 = document.querySelector(".vitri2").value * 1;
      const mess6 = document.querySelector(".mess6");
      const arrMess = document.querySelector(".arr-mess");
      if (arrNumber.length === 0) {
        mess6.innerHTML = `Mảng rỗng!!`;
        mess6.style.color = `red`;
      } else if (
        vitri1 > arrNumber.length - 1 ||
        vitri2 > arrNumber.length - 1
      ) {
        mess6.innerHTML = `Vị trí đầu vào sai!!`;
        mess6.style.color = `red`;
      } else {
        const value1 = arrNumber[vitri1];
        const value2 = arrNumber[vitri2];
        arrNumber[vitri1] = value2;
        arrNumber[vitri2] = value1;
        mess6.style.color = `blue`;
        mess6.innerHTML = `Đổi vị trí thành công!`;
        getAll(arrNumber);
        arrMess.innerHTML = `Mảng: [${arrNumber}]`;
      }
    };
  }

  function getResult7() {
    const sortBtn = document.querySelector(".sort-arr");
    sortBtn.onclick = () => {
      clearMess();
      const mess7 = document.querySelector(".mess7");
      const arrMess = document.querySelector(".arr-mess");
      if (arrNumber.length === 0) {
        mess7.style.color = `red`;
        mess7.innerHTML = `Mảng rỗng`;
      } else {
        arrNumber.sort((a, b) => a - b);
        mess7.style.color = `blue`;
        mess7.innerHTML = `Sắp xếp tăng dần thành công!`;
        arrMess.innerHTML = `Mảng: [${arrNumber}]`;
      }
    };
  }

  getAll(arrNumber);
  getResult6();
  getResult7();
}

getResultAll();
// End check all
