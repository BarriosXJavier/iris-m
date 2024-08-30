import { Code, Zap, BarChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const Features = () => {
    return (
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Key Features
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 mb-2" />
                <CardTitle>Intelligent Parsing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Advanced algorithms to extract structured data from any
                  website with high accuracy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 mb-2" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Optimized for speed, Iris-M can scrape thousands of pages in
                  minutes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 mb-2" />
                <CardTitle>Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Built-in tools to analyze and visualize your scraped data in
                  real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
}

export default Features