const openNextWorkerStub = {
  fetch: async (...args: unknown[]) => {
    void args;
    return new Response("stub");
  },
};

export default openNextWorkerStub;
