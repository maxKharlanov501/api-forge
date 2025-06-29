import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

function AuthCard() {
  return (
    <div>auth card</div>
  )
}

function LoginCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login into your account</CardDescription>
        <CardAction>
          <Button variant="link">Signup</Button>
        </CardAction>
        <CardContent>
          <form action="">
            123
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

function SignupCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login into your account</CardDescription>
        <CardAction>
          <Button variant="link">Signup</Button>
        </CardAction>
        <CardContent>
          <form action="">
            123
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export { AuthCard, LoginCard, SignupCard }