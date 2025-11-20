# `anderson_impurity_model`

The generic Hamiltonian for an impurity model is given by:

$$
H = H_{\textrm{imp.}} + H_\textrm{bath} + H_\textrm{hyb.},
$$

The impurity term describes electrons that can hop between $L$ different impurities, with a Hubbard-like onsite repulsive interaction of strength $U$:

$$
H_\textrm{imp.} = \sum_{l,l' = 1,  \sigma \in [ \uparrow, \downarrow]}^L t_{ll'} d^\dagger_{l\sigma} d_{l'\sigma} + U \sum_{ l =1}^L d^\dagger_{l\uparrow}d_{l\uparrow} d^\dagger_{l\downarrow} d_{l\downarrow},
$$

where $d^\dagger_{l\sigma}/d_{k\sigma}$ are the creation/annihilation operators for impurity mode $l$ with spin $\sigma$. The symmetric matrix with $t_{ll'}$ elements describes the hopping amplitudes between impurities, and its diagonal part is a chemical potential, which is set to $t_{ll} = U/2$.  

$H_\textrm{bath}$ describes a number $K$ of non-interacting fermionic modes per impurity. Given its non-interacting nature, the bath can always be written in the single-particle basis where it is diagonal:

$$
H_\textrm{bath} = \sum_{l = 1,  \sigma \in [ \uparrow, \downarrow] }^L \sum_{\mathbf{k} = 1}^K\varepsilon_\mathbf{k} c^\dagger_{\mathbf{k}l\sigma} c_{\mathbf{k}l\sigma}
$$

where $c^\dagger_{\mathbf{k}l\sigma}/c_{\mathbf{k}l\sigma}$ are the creation/annihilation operators for mode $k$ and spin $\sigma$, associated to impurity $l$. $\varepsilon_\mathbf{k}$ is the energy of each bath mode. 

The hybridization term describes the hopping of electrons between impurities and their corresponding bath sites:

$$
H_\textrm{hyb.} = \sum_{ l = 1, \sigma \in [ \uparrow, \downarrow] }^L \sum_{\mathbf{k} = 1}^K V_\mathbf{k} \left(c^\dagger_{\mathbf{k}l\sigma} d_{l\sigma} + d^\dagger_{l\sigma} c_{\mathbf{k}l\sigma} \right).
$$

where $V_{\mathbf{k}}$ is the so-called hybridization function. Given band-width of the bath $D = \max_\mathbf{k}(\varepsilon_\mathbf{k})-\min_\mathbf{k}(\varepsilon_\mathbf{k})$, a semicircle-like hybridization function is considered $V_{\mathbf{k}} = V\sqrt{(D/2)^2 - \varepsilon_\mathbf{k}^2}$, with $V$ a parameter that controls the hybridization amplitude. 

The parameters considered in this Hamiltnian consist on $L = 4$ impurities and $K = 7$ bath sites per impurity. Half occupation and zero total magnitization are considered. Correspondingly, the number of spinfull orbitals is $32$ and the number of electrons is $32$. The impurity modes are arranged in a square geometry, with hopping amplitudes  $t_{l, l+1} = t = -1$ and $t_{l, l+2} = t'= -0.5$, and a value of $U = 10$. The values of $\varepsilon_\mathbf{k}$ are sampled from a uniform distribution with $\max_\mathbf{k}(\varepsilon_\mathbf{k}) = 2$ and $\min_\mathbf{k}(\varepsilon_\mathbf{k}) = -2$. The hybridization amplitude $V = 0.16$.
