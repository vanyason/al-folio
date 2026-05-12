# Override jekyll-cache-bust's bust_css_cache: the gem hashes "assets/_sass/**/*"
# but this repo keeps Sass partials in "_sass/" at the project root, so the hash
# was always MD5("") = d41d8cd98f00b204e9800998ecf8427e and the stylesheet URL
# never changed across deploys, leaving stale CSS cached in browsers.
module Jekyll
  module CacheBust
    class CacheDigester
      private

      def directory_files_content
        Dir[File.join(directory, '**', '*')]
          .reject { |f| File.directory?(f) }
          .sort
          .map { |f| File.read(f) }
          .join
      end
    end
  end
end

module Jekyll
  module CacheBustOverride
    def bust_css_cache(file_name)
      Jekyll::CacheBust::CacheDigester
        .new(file_name: file_name, directory: '_sass')
        .digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBustOverride)
