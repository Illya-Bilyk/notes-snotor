import { Field } from 'components/NoteForm/NoteForm.styled';

export const ModalSettings = () => {
  return (
    <>
      <form>
        <label>Local Storage</label>
        <Field type="checkbox" id="ls" name="ls" value={true} />
        <label>Firebase</label>
        <Field type="checkbox" id="db" name="db" value={false} />
      </form>
    </>
  );
};
