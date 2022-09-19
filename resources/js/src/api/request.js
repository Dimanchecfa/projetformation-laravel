// requeste and dispatch to redux

import HTTP_CLIENT, { handlingErrors } from "./client";

const FILE_HEADERS = {
  headers: { "Content-Type": "multipart/form-data" },
};


//--auth request --//


export const signup = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/signup", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};

export const verifyAccount = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/verify-email", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};


export const resendEmailVerification = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/resend/email/verify", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};

export const resetPassword = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/reset/password", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};

export const resetPasswordConfirm = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/reset/password/confirm", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};

export const changePassword = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/change/password", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};


export const signin = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/signin", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(handlingErrors(error));
      });
  });
};
//-- auth request --//

//-- apprenant request --//

export const addLearner = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/add/learner", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};
export const getAllLearners = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get("apprenant", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};

export const getLearner = (uuid) => {
  new Promise((resolve , reject) => {
    HTTP_CLIENT.get(`apprenant/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};

export const updateLearner = (uuid, data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.put(`apprenant/${uuid}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};

export const deleteLearner = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.delete(`apprenant/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
};
//-- apprenant request --//

//-- formateur request --//

export const addTrainer = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/formateur", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getAllTrainers = () => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get("/formateur")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getTrainer = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get(`/formateur/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const updateTrainer = (uuid, data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.put(`/formateur/${uuid}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const deleteTrainer = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.delete(`/formateur/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

//-- formateur request --//

//-- formation request --//

export const addTraining = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/formation", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getAllTrainings = () => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get("/formation")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getTraining = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get(`/formation/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const updateTraining = (uuid, data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.put(`/formation/${uuid}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const deleteTraining = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.delete(`/formation/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

//-- formation request --//

// -- programme request --//

export const addProgram = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/programme", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getAllPrograms = () => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get("/programme")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getProgram = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get(`/programme/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const updateProgram = (uuid, data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.put(`/programme/${uuid}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const deleteProgram = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.delete(`/programme/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

//-- programme request --//

// --seances request --//

export const addSession = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/seance", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getAllSessions = () => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get("/seance")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getSession = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get(`/seance/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const updateSession = (uuid, data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.put(`/seance/${uuid}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const deleteSession = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.delete(`/seance/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

//-- seances request --//

// -- module request --//

export const addModule = (data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.post("/module", data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getAllModules = () => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get("/module")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const getModule = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.get(`/module/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const updateModule = (uuid, data) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.put(`/module/${uuid}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

export const deleteModule = (uuid) => {
  new Promise((resolve, reject) => {
    HTTP_CLIENT.delete(`/module/${uuid}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        const message = handlingErrors(error);
        reject(message);
      });
  });
}

//-- module request --//


  


