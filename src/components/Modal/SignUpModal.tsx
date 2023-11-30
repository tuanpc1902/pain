import { Modal } from 'antd';

type SignUpModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

function SignUpModal({ open, setOpen }: SignUpModalProps) {
    function toggleModal() {
        setOpen(!open);
    }

    return (
        <Modal title="Sign Up" open={open} onCancel={toggleModal}>
            <p>Some contents...</p>
        </Modal>
    );
}
export default SignUpModal;
