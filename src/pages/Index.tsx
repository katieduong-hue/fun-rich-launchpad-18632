import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Users, Zap } from "lucide-react";
import angelImage from "@/assets/angel-green.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-rich">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-fun blur-2xl opacity-30 rounded-full"></div>
              <h1 className="relative text-7xl md:text-8xl font-black bg-gradient-fun bg-clip-text text-transparent">
                FUN
              </h1>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FUN Profile
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Vui Và Giàu – Vui Là Giàu
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Mạng xã hội Web3 nơi niềm vui gặp gỡ sự thịnh vượng
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="xl"
            className="mb-16 animate-scale-in"
          >
            <Sparkles className="w-6 h-6" />
            Explore Feed
          </Button>
          
          {/* Angel Image */}
          <div className="flex justify-center mb-16 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src={angelImage} 
                alt="FUN Angel" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Profile Card */}
          <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-fun transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-gradient-fun flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Tạo hồ sơ Web3 độc đáo của bạn. Kết nối ví, hiển thị NFT và xây dựng danh tiếng on-chain.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feed Card */}
          <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-fun transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-gradient-fun flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Khám phá nội dung Web3 phong phú. Chia sẻ, tương tác và kiếm thưởng cùng cộng đồng.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Ecosystem Card */}
          <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-fun transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-gradient-fun flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">FUN Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Tham gia hệ sinh thái FUN với DeFi, NFT marketplace và nhiều tính năng Web3 thú vị.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-fun py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Sẵn sàng vui và giàu?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Tham gia FUN Profile ngay hôm nay và trải nghiệm Web3 theo cách hoàn toàn mới
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Button variant="secondary" size="lg">
                Tạo Profile
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="border-t border-white/20 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/80">
                  © 2025 FUN Profile. All rights reserved.
                </p>
                <div className="flex gap-6 text-white/80">
                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="hover:text-white transition-colors">Discord</a>
                  <a href="#" className="hover:text-white transition-colors">Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
