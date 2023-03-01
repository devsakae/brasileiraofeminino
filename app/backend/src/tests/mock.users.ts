const userAdmin = {
  id: 1,
  username: 'Admin',
  email: 'admin@admin.com',
  role: 'admin',
  password: 'nothashedpassword',
};

const userUser = {
  id: 2,
  username: 'User',
  email: 'user@user.com',
  role: 'user',
  password: 'nothashedpassword',
};

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE2Nzc2OTY4ODksImV4cCI6MTY3ODMwMTY4OX0.TVcVJ_9AsnDmDznHKnSGGU3Ci1WXHZ1I88c1euT7YSQ';

export { userAdmin, userUser, userToken };
