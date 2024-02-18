import React, { JSX } from 'react';
import Banner from '@Img/banner.jpg';

/**
 * `UMainFC` is a parth from `404.html` file
 * @returns html
 */
export function UMainFC(): JSX.Element {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <div className="banner">
              <img src={Banner} className="img-fluid" alt="К весне готовы!" />
              <h2 className="banner-header">К весне готовы!</h2>
            </div>
            <section className="top-sales">
              <h2 className="text-center">Страница не найдена</h2>
              <p>
                Извините, такая страница не найдена!
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
