import { Container } from '@components/atoms/container'

export function Footer() {
  return (
    <footer className="text-sm border-t border-amber-500/50 select-none z-50">
      <Container>
        <div className="mx-auto px-6 py-6 md:py-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://MrAdib.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition dark:text-gray-100 dark:hover:text-gray-50"
            >
              MrAdib <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="mt-2 md:order-1 md:mt-0">
            <p className="text-center text-gray-500 dark:text-gray-300">
              &copy; 2024 MrAdib. Some rights reserved!
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
