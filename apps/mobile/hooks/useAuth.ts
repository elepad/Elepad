////////////////////////////////////////////////////////////////////////////////
//                         Este hook es un placeholder                        //
////////////////////////////////////////////////////////////////////////////////

export default function useAuth() {
  const login = async (params: object) => {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ params }),
    });

    // Manejo infalible de error
    if (response.ok) {
      return true;
    }

    return false;
  };

  const newUser = async (params: object) => {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API}/auth/newAccount`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ params }),
      },
    );

    // Manejo infalible de error
    if (response.ok) {
      return true;
    }

    return false;
  };

  return {
    login,
    newUser,
  };
}
