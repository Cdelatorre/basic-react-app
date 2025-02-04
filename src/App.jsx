import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/home'
import Navbar from './components/Navbar/Navbar'
import Users from './screens/users/users'
import UsersCreate from './screens/users-create/users-create'
import UsersDetail from './screens/users-detail/users-detail'
import UsersEdit from './screens/users-edit/users-edit'
import Login from './screens/login/login'
import Profile from './screens/profile/profile'
import Footer from './components/Footer/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import PostCreate from './screens/posts-create/PostCreate'
import Feed from './screens/feed/feed'
import Likes from './screens/likes/likes'

function App() {

  return (
    <>
      <Navbar />

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/users"
            element={<Users />}
          />
          <Route
            path="/users/create"
            element={<UsersCreate />}
          />
          <Route
            path="/users/:id"
            element={<UsersDetail />}
          />
          <Route
            path="/users/edit/:id"
            element={<UsersEdit />}
          />
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>}
          />
          <Route
            path="/likes"
            element={
              <ProtectedRoute>
                <Likes />
              </ProtectedRoute>}
          />


          <Route
            path="/posts/create"
            element={
              <ProtectedRoute>
                <PostCreate />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
