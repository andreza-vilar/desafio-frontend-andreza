export default async function requestApi(set) {
  const result = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans')
    .then((data) => data.json());
  set(result);
}

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};