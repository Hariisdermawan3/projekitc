import React, { useState } from 'react';

const AkunAnda = () => {
  const [avatar, setAvatar] = useState('src/assets/img/fotoprofile.png');
  const [name, setName] = useState('Ni Wayan Mari Yastini, S. Pd.');
  const [username, setUsername] = useState('MariYastini');
  const [email, setEmail] = useState('mariyastini@gmail.com');
  const [location, setLocation] = useState('Bali, Indonesia');
  const [password, setPassword] = useState('********');
  const [bio, setBio] = useState('');
  const [profession, setProfession] = useState('Guru');

  const handleUpdateSettings = () => {
    console.log('Settings updated!');
  };

  const handleChangeAvatar = () => {
    console.log('Changing avatar...');
  };

  const handleDeleteAvatar = () => {
    console.log('Deleting avatar...');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F0ECCF', padding: '10rem' }}>
      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <img src={avatar} alt="Profile Avatar" style={{ marginBottom: '10px' }} />
        <button onClick={handleChangeAvatar} style={{ width:'100%', backgroundColor: '#F3B664' }}>Change Avatar</button>
        <button onClick={handleDeleteAvatar} style={{ width:'100%', backgroundColor: '#BFBABA' }}>Delete Avatar</button>
      </div>

      <div style={{ textAlign: 'left', maxWidth: '300px', margin: 'auto' }}>
        <label style={{display: 'block', margin:'20px 0'}}>
          Nama
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ background: '#F0ECCF' }} />
        </label>

        <label style={{display: 'block', margin:'20px 0'}}>
          Nama Pengguna
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ background: '#F0ECCF' }} />
        </label>

        <label style={{display: 'block', margin:'20px 0'}}>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ background: '#F0ECCF' }} />
        </label>

        <label style={{display: 'block', margin:'20px 0'}}>
          Location
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ background: '#F0ECCF' }} />
        </label>
      </div>

      <div style={{ textAlign: 'left', maxWidth: '300px' }}>
        <label style={{display: 'block', margin:'20px 0'}}>
          Kata Sandi
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ background: '#F0ECCF' }} />
        </label>

        <label style={{display: 'block', margin:'20px 0'}}>
          Bio
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} style={{ background: '#F0ECCF' }} />
        </label>

        <label style={{display: 'block', margin:'20px 0'}}>
          Profesi
          <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} style={{ background: '#F0ECCF' }} />
        </label>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button onClick={handleUpdateSettings} style={{ backgroundColor: '#F3B664', marginTop:'25rem' }}>Update Settings</button>
      </div>
    </div>

  );
};

export default AkunAnda;
