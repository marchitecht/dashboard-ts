import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
  };

  const cssLoader = buildCssLoaders(isDev);
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  // const babelLoader = {
  //   test: /\.(js|jsx|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: "babel-loader",
  //     options: {
  //       presets: ["@babel/preset-env"],
  //     },
  //   },
  // };

  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
