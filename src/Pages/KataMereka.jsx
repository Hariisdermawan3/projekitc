import { Form, FloatingLabel, Button } from 'react-bootstrap';

const KataMereka = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Form style={{ width: '80%' }}>
          <h2 style={{ textAlign: 'center', color: '#454411', margin: '60px' }}>Kirimkan Kritik dan Saran Anda untuk Website Kami</h2>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Nama Pengguna*"
            className="mb-3"
            style={{color: '#F38086'}}
          >
            <Form.Control placeholder="Tinggalakan nama pengguna Anda disini" style={{ borderColor: 'red', backgroundColor: 'rgb(232, 80, 91, 5%)', borderRadius: '15px' }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Pesan Anda*" style={{color: '#F38086'}}>
            <Form.Control
              as="textarea"
              placeholder="Tinggalkan pesan Anda disini"
              style={{ height: '100px', borderColor: 'red', backgroundColor: 'rgb(232, 80, 91, 5%)', borderRadius: '15px', marginTop: '50px' }}
            />
          </FloatingLabel>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outline-danger" style={{ backgroundColor: 'rgb(232, 80, 91, 5%)', color: 'red', marginTop: '10px', borderRadius: '10px' }}>
            Kirim
          </Button>{' '}
        </div>
        </Form>
      </div>
    </>
  );
}

export default KataMereka;
