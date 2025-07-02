import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <Card className="w-full max-w-md shadow-editorial">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-editorial">Welcome back</CardTitle>
            <p className="text-muted-foreground">Sign in to your account</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </div>
            <Button className="w-full gradient-accent text-white">Sign In</Button>
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <a href="/signup" className="text-accent hover:underline">Sign up</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;