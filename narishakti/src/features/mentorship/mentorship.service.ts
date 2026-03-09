export type Mentor = {
  id: string;
  name: string;
};

export async function listMentors(): Promise<Mentor[]> {
  return [
    { id: "m1", name: "Ananya Rao" },
    { id: "m2", name: "Ritika Das" },
  ];
}
