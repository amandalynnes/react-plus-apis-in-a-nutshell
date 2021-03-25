<!-- 
Resources:

https://stackoverflow.com/questions/63626757/django-rest-framework-cors-cross-origin-resource-sharing-is-not-working

People:
questions channel thread (Latisha and Jeffrey)
 -->



# react-plus-apis-in-a-nutshell

Now that you've created an API with Django Rest Framework (DRF), let's put that API to use!

You all remember [React](https://reactjs.org/). right? Well, it's just the tool we need for accessing the data from our API. In this assessment, we'll create a Single Page Application (SPA) that fetches data from our backend API and displays it on our React frontend.

#### **Your Task**

For this assessment, we will be creating a new React frontend and reusing our backend from **Django ReST Framework: APIs in a Nutshell** 

**Frontend**

Create a new react app. You'll want to use something like Facebook's [Create React App](https://github.com/facebook/create-react-app/blob/master/README.md). Please check the documentation, because this project's documentation is frequently updated. You can use either npm or yarn as your package manager, whichever you prefer to use is fine.

This react app will be relatively simple. We don't need to worry about using Redux, and we just need to create one component to handle everything we need.

<span style="text-decoration: underline;">Requirements</span>

*   Uses [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get data from your Django Rest Framework API → [https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)
*   Displays all instances of Shoe on a single page
*   Each attribute of a given Shoe is displayed:
    *   size
    *   brand name
    *   manufacturer
    *   color
    *   material
    *   shoe_type
    *   fasten_type

**Backend**

Our backend API is already functional, but we do need to make some changes before it will talk to our frontend. The frontend will be displaying shoes, so be sure to add at least 5 new instances of shoe to your backend. In addition, we'll need to worry about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). DRF has a [documentation page](https://www.django-rest-framework.org/topics/ajax-csrf-cors/#cors) on how to handle CORS via a python package called [django-cors-headers](https://github.com/ottoyiu/django-cors-headers/). Use this package to allow your frontend to fetch data.

<span style="text-decoration: underline;">Note:</span> For this assessment, be sure to include your **db.sqlite3** in your submission. We want to see those shoes 👟

<span style="text-decoration: underline;">Requirements</span>

*   Backend is setup with [django-cors-headers](https://github.com/ottoyiu/django-cors-headers/)
*   Create at least 5 instances of Shoe via the DRF "admin panel".

#### **Submission**

You should already have a repo for your backend. This repo will be for the frontend code only.

In the section below, please be sure to include the GitHub URL to your backend (in this README.md). In Canvas, you'll submit a link to the frontend repo.

**Frontend**
```
https://github.com/kenzie-se-q4/react-plus-apis-in-a-nutshell-<github_username>/
```

**Backend**

[your_backend_url_goes_here](#)
